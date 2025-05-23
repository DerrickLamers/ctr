import Router from 'express';

import {placeController} from '../controllers';

const placeRoutes = Router();
placeRoutes.get('/can_admin/:slug/:id?',
  (request, response) => placeController.canAdmin(request, response));
placeRoutes.get('/can_manage_access/:slug/:id?',
  (request, response) => placeController.canManageAccess(request, response));
placeRoutes.get('/getAccessInfo/:slug/:id?',
  (request, response) => placeController.getAccessInfoByUsername(request, response));
placeRoutes.get('/getSecurityInfo',
  (request, response) => placeController.getSecurityInfo(request, response));
placeRoutes.get('/:placeId/object_instance',
  (request, response) => placeController.getPlaceObjects(request, response));
placeRoutes.get('/:slug',
  (request, response) => placeController.getPlace(request, response));
placeRoutes.get('/by_id/:id',
  (request, response) => placeController.getPlaceById(request, response));
placeRoutes.post('/add_storage', (request, response) => 
  placeController.addStorage(request, response));
placeRoutes.post('/delete_storage', (request, response) =>
  placeController.deleteStorage(request, response));
placeRoutes.post('/postAccessInfo/:slug/:id?',
  (request, response) => placeController.postAccessInfo(request, response));
placeRoutes.get('/virtual-pet/:place_id', 
  (request, response) => placeController.getVirtualPet(request, response));
placeRoutes.post('/virtual-pet/add/:place_id', 
  (request, response) => placeController.addVirtualPet(request, response));
placeRoutes.post('/virtual-pet/update/:place_id', 
  (request, response) => placeController.updateVirtualPet(request, response));

export { placeRoutes };
