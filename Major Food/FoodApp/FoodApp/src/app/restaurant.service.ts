import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormRecord } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
bill:any=0;
  constructor(private httpClient : HttpClient) { }
  restaurantBaseURL:any="http://localhost:8888/restaurant-app";
  userBaseURL:any="http://localhost:8888/user-app";
  feedbackBaseUrl="http://localhost:8888/feedback"
  requestBaseUrl="http://localhost:8888/request-app";
  getAllRestaurants(){
    return this.httpClient.get(this.restaurantBaseURL+'/get-all-restaurants')
  }

  getRestaurantByName(restaurantName:any){
    return this.httpClient.get(this.restaurantBaseURL+'/get-restaurant-by-name/'+restaurantName);
  }

  getRestaurantByLocation(location:any){
    return this.httpClient.get(this.restaurantBaseURL+'/get-restaurant-by-location/'+location);
  }

  getRestaurantByCuisineName(cuisineName:any){
    return this.httpClient.get(this.restaurantBaseURL+'/get-restaurant-by-cuisineName/'+cuisineName);
  }

  getRestaurantByItemName(itemName:any){
    return this.httpClient.get(this.restaurantBaseURL+'/get-restaurant-by-itemName/'+itemName);
  }

  getUserDetails(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.get(this.userBaseURL+'/get-user-byID',requestOptions);
  }

  getAllUserDetails(){
    return this.httpClient.get(this.userBaseURL+'/get-all-users');
  }

  getUserDetailsByRole(role:any){
    return this.httpClient.get('http://localhost:9999/auth-app/get-users-by-role/'+role);
  }

  editUserDetails(userForm:any,profile:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    let params = new FormData();
    params.append('emailID',userForm.emailID);
    params.append('name',userForm.name);
    params.append('location',userForm.location);
    params.append('mobileNo',userForm.mobileNo);
    params.append('role',userForm.role);
    params.append('file',profile);
    return this.httpClient.post(this.userBaseURL+'/edit-user-profile',params,requestOptions)
  }
  addNewRestaurant(restaurantDetails:any,image:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    let params=new FormData();
    params.append('name',restaurantDetails.name);
    params.append('ownerEmailId',restaurantDetails.ownerEmailID);
    params.append('location',restaurantDetails.location);
    params.append('file',image);
    return this.httpClient.post(this.restaurantBaseURL+'/add-restaurant',params,requestOptions);
  }

  getRestaurantByOwner(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.get(this.restaurantBaseURL+'/get-restaurant-by-owner',requestOptions);
  }


  updateRestaurantDetails(restaurantDetails:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.put(this.restaurantBaseURL+'/edit-restaurant',restaurantDetails,requestOptions);
  }

  deleteRestaurant(restaurantName:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.delete(this.restaurantBaseURL+'/delete-restaurant/'+restaurantName,requestOptions);
  }

  addToCart(items:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    let params=new FormData();
    params.append('itemName',items.itemName);
    params.append('price',items.price);
    // params.append('itemImage',items.itemImage)
    return this.httpClient.post(this.restaurantBaseURL+'/add-items-to-cart',params,requestOptions);
  }
  addQuantity(itemName:any,price:any,userDetails:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.post(this.restaurantBaseURL+`/add-quantity/${itemName}/${price}`,userDetails.emailID,requestOptions);
  }
  removeFromCart(itemName:any,price:any,userDetails:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    console.log(localStorage.getItem('jwt'));
    return this.httpClient.post(this.restaurantBaseURL+`/remove-item-from-cart/${itemName}/${price}`,userDetails.emailID,requestOptions);
  }

  removeRestaurantFromFav(restaurant:any){
    console.log(localStorage.getItem('jwt'))
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.post(this.restaurantBaseURL+'/remove-restaurant-from-fav-list',restaurant,requestOptions);
  }

  placeOrder(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.get(this.restaurantBaseURL+'/place-order',requestOptions);
  }

  addToFavourites(restaurant:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    let params=new FormData();
    params.append('name',restaurant.name);
    params.append('location',restaurant.location)
    return this.httpClient.post(this.userBaseURL+'/add-favourite-restaurant',params,requestOptions);
  }

  addFeedback(feedback:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.post(this.feedbackBaseUrl+"/add-feedback",feedback,requestOptions);
  }
  addCuisine(name:any,cuisineName:any){
    return this.httpClient.post(this.restaurantBaseURL+"/add-cuisines/"+name,cuisineName)
  }

  addItemsToCuisines(name:any,cuisineName:any,items:any,image:any){
    console.log(items);
    let params=new FormData();
    params.append('itemName',items.itemName);
    params.append('price',items.price)
    params.append('file',image)
    return this.httpClient.post(this.restaurantBaseURL+`/add-items-to-cuisine/${name}/${cuisineName}`,params);
    //return this.httpClient.post(this.restaurantBaseURL+'/add-items-to-cuisine/'+name+'/'+cuisineName,items);

  }
  removeCuisine(name:any,cuisine:any){
    return this.httpClient.post(this.restaurantBaseURL+`/remove-cuisine-from-rest/${name}`,cuisine);
  }
  removeItems(name:any,cuisineName:any,item:any){
    return this.httpClient.post(this.restaurantBaseURL+`/remove-items-from-cuisine/${name}/${cuisineName}`,item);
  }

  calculateBill(userDetails:any){
    for(let c of userDetails.cartItems){
      this.bill=this.bill+parseInt(c.price);
    }
    return this.bill;
  }
  sendRequest(requestForm:any){
    return this.httpClient.post(this.requestBaseUrl+"/add-request",requestForm)
  }
  getRequests(){
    return this.httpClient.get(this.requestBaseUrl+"/get-all-request")
  }
  deleteRequest(emailID:any){
    return this.httpClient.delete(this.requestBaseUrl+"/delete-req-by-ID/"+emailID)
  }
}
