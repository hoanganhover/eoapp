import request from '../../utils/request';
export const getProduct = (ProductId) => request.get(`/iis/iotstuff/api/eops/product/${ProductId}`);

