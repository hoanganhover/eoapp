import request from '../../utils/request';

export const getStore = () => request.get('/iis/iotstuff/api/eops/bootstrap');
export const getRevenue = () => request.get('/iis/iotstuff/api/eops/revenue/stores');
export const getStoreID = (StoreID) => request.get(`/iis/iotstuff/api/eops/Revenue/Store/${StoreID}/PaymentMethods`);
export const getPaymentID = (PayID,StoreID) => request.get(`iis/iotstuff/api/eops/Invoices/Search?storeId=${StoreID}&paymentMethodId=${PayID}`);
export const getProduct = (ProductId) => request.get(`/iis/iotstuff/api/eops/product/${ProductId}`);

