import Invoice from '../../Invoice/domain/Invoice'
import { InvoiceStatus } from '../../Invoice/domain' 

const invoiceFixture: Invoice = {
  number: "INV-001",
  preTaxAmount: 1000.0,
  poNumber: "PO1234A",
  discount: 0.0,
  dateOfIssue: "2024-01-01",
  taxAmount: 200.0,
  vendor: "Vendor A",
  id: 1,
  dueDate: "2024-01-31",
  totalAmount: 1200.0,
  vendorBankDetails: "BANK12345A",
  currency: "USD",
  glCode: "GL001",
  vendorTaxRegistrationNumber: "TAX123456A",
  paymentTerms: 30,
  vendorAddress: "123 Vendor St, City A",
  description: "2x Widget A",
  costCentre: "Cost Centre A",
  billingAddress: "456 Billing Rd, City B",
  lineItemDetails: "2x Widget A",
  status: InvoiceStatus.TO_BE_VALIDATED,
}

export default invoiceFixture