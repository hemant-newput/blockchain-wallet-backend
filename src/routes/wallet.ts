import { Router } from 'express';
import { WalletController } from '../controllers/walletController';
import { response } from '../utils/responseUtil';


const router = Router();

router.post('/balance', response(WalletController.getBalance));
router.post('/send', response(WalletController.sendMoney));
router.post('/history/chain', response(WalletController.transactionHistoryFromChain));
router.post('/history', response(WalletController.transactionHistory));
router.post('/info', response(WalletController.fetchInfo));
router.post('/gif', response(WalletController.fetchGif));

export default router;
