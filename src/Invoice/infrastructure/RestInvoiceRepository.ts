import IInvoiceRepository from '../application/IInvoiceRepository';
import Invoice from '../domain/Invoice';
import InvoiceTransformer from './InvoiceTransformer';
import { HttpClient } from '../../Common';

export default class RestInvoiceRepository implements IInvoiceRepository {
  constructor(
    private httpClient: HttpClient,
  ) {

  }

  public async getAll(): Promise<Invoice[]> {
    const { data: apiInvoices } = await this.httpClient.get('/invoices')

    return apiInvoices.map((apiInvoice: any[]) => InvoiceTransformer.fromApi(apiInvoice))
  }

  public async getById(invoiceId: string): Promise<Invoice> {
    const { data: apiInvoice } = await this.httpClient.get(`/invoices?invoice_id=${invoiceId}`)

    return InvoiceTransformer.fromApi(apiInvoice)
  }
}
