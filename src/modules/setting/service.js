import request from '../../utils/request';

export const getStore = () => request.get('/iis/iotstuff/api/eops/bootstrap');
export const getRevenue = () => request.get('/iis/iotstuff/api/eops/revenue/stores');
