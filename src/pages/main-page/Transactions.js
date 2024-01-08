
import './Transaction.css'
import Orders from '../../component/Orders'
import History from '../../component/History'
const Transactions = () => {
  return (
    <>
    <div className='transact-parent'>
    <Orders/>
    <History/>
    </div>
    </>
  )
}

export default Transactions;