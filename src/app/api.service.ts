import { Injectable, InjectableType } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ApiOrigin = " http://localhost:3000"
  GetRoomInfoURL = "/api/roomData"
  GetRoomShedule = "/api/roomSchedule"


  constructor(private http: HttpClient) { }

  getRoomInfo(roomId: string) {
    const intRoomId = parseInt(roomId);
    console.log("send data:" + JSON.stringify({ room_id: intRoomId }))
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      this.http.post(this.ApiOrigin + this.GetRoomInfoURL, JSON.stringify({ id: intRoomId }), httpOptions)
        .toPromise()
        .then(res => {
          console.log(res)
          resolve(res);
        })
        .catch(res => {
          resolve({
            id: 24,
            name: "rohova zasedska",
            chair: 4,
            contact: "nykl.support@skoda.cz",
            utility: {
              tv: true,
              door: false,
              reproductor: false,
            },
            reportedDefects: [
              {
                name: "demaged HDMI conector",
                reportDate: "2019-5-5",
                expectedRepairDate: "2019-5-30",
                description: "Tv cannot recognize conected computer",
                defectUtilyty: "TV"
              }
            ]
          })//json end
        })
    });
  }
}
