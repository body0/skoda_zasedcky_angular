import { Injectable, InjectableType } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ApiOrigin = " http://localhost:3000"
  GetRoomInfoURL = "/api/roomData"

  constructor(private http: HttpClient) { }

  getRoomInfo(roomId:string) {
    console.log("S"+JSON.stringify({room_id:roomId}))
    const intRoomId = parseInt(roomId);
    console.log("S"+JSON.stringify({room_id:intRoomId}))
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      this.http.post(this.ApiOrigin + this.GetRoomInfoURL, JSON.stringify({room_id:intRoomId}), httpOptions)
      .toPromise()
      .then( res => {
        console.log(res)
        resolve(res);
      })
      .catch( res => {
        resolve({
          "id":24,
          "name":"rohova zasedska",
          "chair":4,
          "support":"nykl.support@skoda.cz"
        })
      })
    });
  }
}
