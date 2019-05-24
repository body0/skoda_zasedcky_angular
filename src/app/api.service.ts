import { Injectable, InjectableType } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ApiOrigin = "https://body0.ml"
  GetRoomInfo = "/api/roomData"
  GetRoomShedule = "/api/roomSchedule"
  NewDefectReport = "/api/newFault"
  NewMeeting = "/api/addRoomReservation"

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  getRoomInfo(roomId: number) {
    return new Promise((resolve, reject) => {
      console.log(JSON.stringify({ id: roomId }), this.ApiOrigin + this.GetRoomInfo)
      this.http.post(this.ApiOrigin + this.GetRoomInfo, JSON.stringify({ id: roomId }), this.HttpOptions)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res);

          //FOR TESTING / EXAMPLE RESPONSE          
          /* resolve({
            id: 24,
            id_found: true,
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
          })//json end */
        })
    });
  }
  newDefectReport(roomId, data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.ApiOrigin + this.NewDefectReport, JSON.stringify({ id: roomId, data: data }), this.HttpOptions)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          console.warn("api error from newDefectReport", res)

          //FOR TESTING / EXAMPLE RESPONSE  
          resolve({
            "status": "Succes"
          })
          //reject();
        })
    });

  }
  getRoomSchedule(roomId) {
    const dateString = new Date().getFullYear() + "-" + String(new Date().getMonth() + 1).padStart(2, '0') + "-" + String(new Date().getDate()).padStart(2, '0');
    return new Promise((resolve, reject) => {
      this.http.post(this.ApiOrigin + this.GetRoomShedule, JSON.stringify({ id: roomId, date: dateString }), this.HttpOptions)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res);

          //FOR TESTING / EXAMPLE RESPONSE  
          /* resolve({
            id: 24,
            id_found: true,
            schedule_list: [
              {
                name: "Velmi důležitá schůze",
                owner: "nykl@skoda.cz",
                start: "2019-05-23T16:15:00",
                end: "2019-05-23T16:45:00",
                description: "long description"
              }
            ]
          });//json end */
        })
    });
  }
  newMeeting(roomId, data) {
    const dateString = new Date().getFullYear() + "-" + String(new Date().getMonth() + 1).padStart(2, '0') + "-" + String(new Date().getDate()).padStart(2, '0');
    data.room_name = roomId;
    data.date_fault = dateString;
    return new Promise((resolve, reject) => {
      this.http.post(this.ApiOrigin + this.NewMeeting, JSON.stringify({ id: roomId, date: "2019-05-22" }), this.HttpOptions)
        .toPromise()
        .then(res => {
          //console.log("res",res)
          resolve(res);
        })
        .catch(res => {
          console.warn("api error from getRoomSchedule", res)
          //FOR TESTING / EXAMPLE RESPONSE  
          resolve({
            "status": "Succes"
          });
        })
    });
  }
}

export class Meeting {
  public name: string;
  public owner: string;
  public start: string;
  public end: string;
}
export class SheduleData {
  public id: string;
  public id_found: boolean;
  public schedule_list: [Meeting]
}
