import { Injectable, InjectableType } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ApiOrigin = " http://body0.ml:3000"
  GetRoomInfoURL = "/api/roomData"
  GetRoomShedule = "/api/roomSchedule"
  NewDefectReport = "/api/newDefectReport"

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  constructor(private http: HttpClient) { }

  getRoomInfo(roomId: number) {
    //console.log("send data:" + JSON.stringify({ room_id: roomId }))
    return new Promise((resolve, reject) => { 
      this.http.post(this.ApiOrigin + this.GetRoomInfoURL, JSON.stringify({ id: roomId }), this.HttpOptions)
        .toPromise()
        .then(res => {
          console.log("reseve data", res)
          resolve(res);
        })
        .catch(res => {
          resolve({
            id: 24,
            name: "rohova zasedska",
            chair: 4,
            contact: "nykl.support@skoda.cz",
            description: "Lorem ipsum dolor sit amet, magna ignota vivendum vel ei, per illum solet nominati eu.\
            Impetus malorum ocurreret et sed, eam ex ubique debitis feugait. Probatus eleifend pro in, mea nullam intellegat\
            eu. Accusamus suscipiantur eam ne.",
            utility: [
              "tv",
              "door",
              "reproductor"
            ],
            reportedDefects: [
              {
                name: "demaged HDMI conector",
                reportDate: "2019-5-5",
                expectedRepairDate: "2019-5-30",
                description: "Tv cannot recognize conected computer",
                defectUtilyty: "TV",
                email: "nykl-support@skoda.cz"
              }
            ]
          })//json end
        })
    });
  }
  newDefectReport(roomId, data){
    return new Promise((resolve, reject) => { 
      this.http.post(this.ApiOrigin + this.GetRoomInfoURL, JSON.stringify({ id: roomId, data: data }), this.HttpOptions)
        .toPromise()
        .then(res => {
          //console.log(res)
          resolve(res);
        })
        .catch(res => {
          console.warn("api error from newDefectReport", res)
          reject();      
        })
    });

  }
  getRoomSchedule(roomId){
    return new Promise((resolve, reject) => { 
      this.http.post(this.ApiOrigin + this.GetRoomShedule, JSON.stringify({ id: roomId }), this.HttpOptions)
        .toPromise()
        .then(res => {
          //console.log("res",res)
          resolve(res);
        })
        .catch(res => {
          console.warn("api error from getRoomSchedule", res)
          resolve({
            id: 24,
            schedule_list:[
              {
                name: "Velmi důležitá schůze",
                owner: "nykl@skoda.cz",
                start: "2019-05-21T12:00:00",
                end: "2019-05-21T12:45:00", 
                description: "long description"
              }
            ]
          });    
        })
    });
  }
}

export class Meeting{
  public name:string;
  public owner:string;
  public start:string;
  public end:string;
}
export class SheduleData{
  public id:string;
  public schedule_list:[Meeting]
}
