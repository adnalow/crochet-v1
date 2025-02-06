import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CartItem } from '@/types/cart';

interface GenerateReceiptProps {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export function generateReceipt({ items, subtotal, tax, total }: GenerateReceiptProps) {
  // Create new PDF document
  const doc = new jsPDF();
  
  // Add header
  doc.setFontSize(20);
  doc.text('JustCraft Receipt', 105, 20, { align: 'center' });
  
  // Add date
  doc.setFontSize(10);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
  doc.text(`Time: ${new Date().toLocaleTimeString()}`, 20, 35);
  
  // Create table data
  const tableData = items.map(item => [
    item.name,
    item.quantity.toString(),
    `$${item.price.toFixed(2)}`,
    `$${(item.price * item.quantity).toFixed(2)}`
  ]);
  
  // Add items table
  autoTable(doc, {
    head: [['Item', 'Quantity', 'Price', 'Total']],
    body: tableData,
    startY: 45,
    theme: 'striped',
    headStyles: {
      fillColor: [128, 0, 128], // Purple color
      textColor: 255,
      fontStyle: 'bold',
    },
    styles: {
      fontSize: 10,
      cellPadding: 5,
    },
  });
  
  // Calculate the Y position for the summary (after the table)
  const finalY = (doc as any).lastAutoTable.finalY || 150;
  
  // Add summary
  doc.setFontSize(10);
  doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 150, finalY + 10);
  doc.text(`Tax (10%): $${tax.toFixed(2)}`, 150, finalY + 15);
  doc.setFontSize(12);
  doc.text(`Total: $${total.toFixed(2)}`, 150, finalY + 25);
  
  // Add footer
  doc.setFontSize(10);
  doc.text('Thank you for shopping with JustCraft!', 105, finalY + 40, { align: 'center' });
  doc.text('We appreciate your business.', 105, finalY + 45, { align: 'center' });
  
  // Save the PDF
  const fileName = `justcraft-receipt-${new Date().getTime()}.pdf`;
  doc.save(fileName);
} 