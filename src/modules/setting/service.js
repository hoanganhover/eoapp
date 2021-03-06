import request from '../../utils/request';
import queryString,{stringify} from 'query-string';

export const getStore = () => request.get('/iis/iotstuff/api/eops/bootstrap');
export const getRevenue = () => request.get('/iis/iotstuff/api/eops/revenue/stores');
export const getStoreID = (StoreID) => request.get(`/iis/iotstuff/api/eops/Revenue/Store/${StoreID}/PaymentMethods`);
export const getPaymentID = (PayID) => request.get(`iis/iotstuff/api/eops/Invoices/Search?paymentMethodId=${PayID}`);
export const getInvoice = (StoreID,PayID) => request.get(`iis/iotstuff/api/eops/Invoices/Search?storeId=${StoreID}&&paymentMethodId=${PayID}`);


export const creatStore = (data) => request.post(`iis/iotstuff/api/eops/store`,queryString.stringify(data));


