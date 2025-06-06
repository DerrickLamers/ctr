import Router from 'express';
import {adminController} from '../controllers';

const adminRoutes = Router();
adminRoutes.post('/ban', (request, response) =>
  adminController.addBan(request, response));
adminRoutes.post('/donor', (request, response) =>
  adminController.addDonor(request, response));
adminRoutes.post('/deleteban', (request, response) =>
  adminController.deleteBan(request, response));
adminRoutes.post('/firerole', (request, response) =>
  adminController.fireRole(request, response));
adminRoutes.get('/banhistory', (request, response) =>
  adminController.getBanHistory(request, response));
adminRoutes.get('/donor', (request, response) =>
  adminController.getDonor(request, response));
adminRoutes.post('/hirerole', (request, response) =>
  adminController.hireRole(request, response));
adminRoutes.get('/rolelist', (request, response) =>
  adminController.getRoleList(request, response));
adminRoutes.get('/usersearch', (request, response) =>
  adminController.searchUsers(request, response));
adminRoutes.get('/userchat', (request, response) =>
  adminController.searchUserChat(request, response));
adminRoutes.get('/avatars', (request, response) =>
  adminController.avatars(request, response));
adminRoutes.post('/avatars/approve', (request, response) =>
  adminController.avatarApprove(request, response));
adminRoutes.post('/avatars/reject', (request, response) =>
  adminController.avatarReject(request, response));
adminRoutes.get('/places', (request, response) =>
  adminController.places(request, response));
adminRoutes.get('/allplacessearch', (request, response) =>
  adminController.searchAllPlaces(request, response));
adminRoutes.get('/userplacessearch', (request, response) =>
  adminController.findUserPlaces(request, response));
adminRoutes.post('/places/update', (request, response) =>
  adminController.placesUpdate(request, response));
adminRoutes.post('/objects/update', (request, response) =>
  adminController.objectssUpdate(request, response));
adminRoutes.get('/transactions', (request, response) =>
  adminController.getTransactions(request, response));
adminRoutes.get('/transactions/:id', (request, response) =>
  adminController.getTransactionsByWalletId(request, response));
adminRoutes.get('/object-instances', (request, response) =>
  adminController.getObjectInstances(request, response));
adminRoutes.get('/object-instances/:id', (request, response) =>
  adminController.getOwnedObjects(request, response));
adminRoutes.get('/get-community-data/', (request, response) =>
  adminController.getCommunityData(request, response));

export {adminRoutes};
