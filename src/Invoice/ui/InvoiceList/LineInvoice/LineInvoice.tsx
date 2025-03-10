import Invoice from '@src/Invoice/domain/Invoice';
import { DateFormatter, formatAmount } from '@src/Common';
import { Button } from '@src/Common/ui';
import { ListRow } from '../ListRow';
import './LineInvoice.sass'
import BUTTON_VARIANTS from '@src/Common/ui/Button/ButtonVariants.enum';
import { useNavigate } from 'react-router-dom';

export default function LineInvoice({ className, invoice }: LineInvoiceProps) {
  const navigate = useNavigate()

  return (
    <li className={`line-invoice ${className}`}>
      <ListRow className='line-invoice__wrapper'>
        <p className='line-invoice__value'>{invoice.number}</p>
        <p className='line-invoice__value'>{invoice.vendor}</p>
        <p className='line-invoice__value'>{invoice.description}</p>
        <p className='line-invoice__value'>{DateFormatter.short(invoice.dueDate)}</p>
        <p className='line-invoice__value'>{formatAmount(invoice.totalAmount, invoice.currency)}</p>
        <Button className='line-invoice__review'
          title='Review'
          onClick={() => navigate(`/invoices/${invoice.id}`)}
          variant={BUTTON_VARIANTS.PRIMARY}
        />
      </ListRow>
    </li>
  );
}

type LineInvoiceProps = {
  className?: string,
  invoice: Invoice,
}