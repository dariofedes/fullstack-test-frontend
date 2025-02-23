import { InvoiceService } from '@src/Invoice/application'
import useInvoiceDetails from './useInvoiceDetails'
import './InvoiceDetails.sass'
import { Detail } from './Detail'
import { DetailsRow } from './DetailsRow'
import { Button } from '@src/Common/ui'
import BUTTON_VARIANTS from '@src/Common/ui/Button/ButtonVariants.enum'
import { StatusBadge } from './StatusBadge'
import { DateFormatter } from '@src/Common'
import { PDFViewer } from '@src/Common/ui/PDFViewer'

export default function InvoiceDetails({ invoiceId, invoiceService }: invoiceDetailsProps) {
  const { details, pdfUri, validate, reject } = useInvoiceDetails(invoiceId, invoiceService)

  return (
    <div className="invoice-details__wrapper">
      <div className="invoice-details">
            <div className="invoice-details__invoice-viewer">
              {pdfUri && <PDFViewer pdfUri={pdfUri} />}
            </div>
            <div className="invoice-details__data">
              <div className="invoice-details__header">
                <p className="invoice-details__invoice-number">{details?.number}</p>
                {details && <StatusBadge status={details.status} />}
              </div>
              <div className="invoice-details__section">
                <p className="invoice-details__section-title">Vendor Details</p>
                <DetailsRow>
                  <Detail className="invoice-details__detail" label="Vendor" value={details?.vendor} />
                  <Detail className="invoice-details__detail" label="Vendor Tax Registration Number" value={details?.vendorTaxRegistrationNumber} />
                  <Detail className="invoice-details__detail" label="Vendor Bank Details" value={details?.vendorBankDetails} />
                </DetailsRow>
                <DetailsRow>
                  <Detail className="invoice-details__detail" label="Vendor Address" value={details?.vendorAddress} />
                  <Detail className="invoice-details__detail" label="Billing Address" value={details?.billingAddress} />
                </DetailsRow>
              </div>
              <div className="invoice-details__section">
                <p className="invoice-details__section-title">Invoice Details</p>
                <DetailsRow>
                  <Detail className="invoice-details__detail" label="Invoice Number" value={details?.number} />
                  <Detail className="invoice-details__detail" label="PO Number" value={details?.poNumber} />
                </DetailsRow>
                <DetailsRow>
                  <Detail className="invoice-details__detail" label="Date of Issue" value={details ? DateFormatter.long(details.dateOfIssue) : undefined} />
                  <Detail className="invoice-details__detail" label="Payment Terms" value={details?.paymentTerms} />
                  <Detail className="invoice-details__detail" label="Due Date" value={details ? DateFormatter.long(details.dueDate) : undefined} />
                </DetailsRow>
                <DetailsRow>
                  <Detail className="invoice-details__detail" label="Invoice Description" value={details?.description} />
                  <Detail className="invoice-details__detail" label="Line Item Details" value={details?.lineItemDetails} />
                </DetailsRow>
                <DetailsRow>
                  <Detail className="invoice-details__detail" label="Pre-Tax Amount" value={details?.preTaxAmount} />
                  <Detail className="invoice-details__detail" label="Discount" value={details?.discount} />
                  <Detail className="invoice-details__detail" label="Tax Amount" value={details?.taxAmount} />
                </DetailsRow>
                <DetailsRow>
                  <Detail className="invoice-details__detail" label="Total Amount" value={details?.totalAmount} />
                  <Detail className="invoice-details__detail" label="Currency" value={details?.currency} />
                </DetailsRow>
                <DetailsRow>
                  <Detail className="invoice-details__detail" label="GL Code" value={details?.glCode} />
                  <Detail className="invoice-details__detail" label="Cost Center" value={details?.costCentre} />
                </DetailsRow>
              </div>
              <div className="invoice-details__review">
                <Button
                  variant={BUTTON_VARIANTS.SUBMIT}
                  title={'Validate'}
                  onClick={() => validate()}
                />
                <Button
                  variant={BUTTON_VARIANTS.WARNING}
                  title={'Reject'}
                  onClick={() => reject()}
                />
              </div>
            </div>
          </div>
    </div>
  )
}

type invoiceDetailsProps = {
  invoiceId: string,
  invoiceService: InvoiceService,
}