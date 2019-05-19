# Skoda

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Škoda zasedačky
PWA app for Škoda auto

## Technology:<br/>
    -Angualr 7.3.4.  
    -Angular Material  
    -QR Scanner [link](https://www.npmjs.com/package/qr-scanner)  

## Project structure  
    -Angular Cutorm Theme: src/app/skodaTheme.scss

## Database API

**Information about room**
- /api/roomData<br/>
    example request:
    ```
    {
        "roomId":<integer>
    }
    ```
    example response:
    ```
    {   
        "roomId": <integer>
        "name": <string>
        "support_contact": <string>
        "seats": <integer>
        "description": <string>
        "utility": [ <string representation of utility name> ]
        "reportedDefects":[
            {
                "name": <string>
                "reportDate" <yyyy-mm-dd>
                "expectedRepairDate": <yyyy-mm-dd>
                "description": <string>
                "defectUtilyty": <utylity>
                "email": <email of user, who reported the defect>
            }
        ]
    }
    ```
    
    //Date in format: YYYY-MM-DD hh-mm-ss.sss  For example: 2019-05-14 00:00:00.000
    //Zkontroluj zda je platný

    **Add new defect report**
    example request:
    ```
    {
        "roomId":<integer>
        "data":{
            "name": <string>
            "description": <string>
            "defectUtilyty": <utylity>
            "email": <email of user, who reported the defect>
        }
    }
    ```
    example response:
    ```
    {   
    }
    ```
    
    **Room reservation schedule**
- /api/roomSchedule <br/>
    example request:
    ```
    {
        "roomId":<integer>
    }
    ```
    example response:
    ```
    {   
        "roomId": <room id>
        "schedule_list":[
            {
                "owner": <user id>
                "name": <string>
                "description": <string>
                "start" <>
                "end": <>
            }
        ]
    }
    ```
    **Add new room reservation**
    - /api/addRoomReservation<br/>
    
    
    **List of rooms where users have meating**
- /api/getUserSchedule<br/>
    example request:
    ```
    {
        "userName":<string>
        ?"password":<string>
    }
    ```
    example response:
    ```
    {   
        "roomId": <room id>
        "schedule_list":[
            {
                "owner": <user id>
                "name": <string>
                "description": <string>
                "start" <>
                "end": <>
            }
        ]
    }
    ```
    
    
    **Log-in**
- /api/getUserSession<br/>
    example request:
    ```
    {
        "userName":<string>
        "password":<string>
    }
    ```
    example response:<br/>
        -return sesion cookie
    ```
    {   
        "userId": <room id>
        "email": <string>
    }
    ```
