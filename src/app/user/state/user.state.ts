export interface UserState {
    UserData: any;
    firstname:string,
   lastname:string,
   dob:Date,
   email:string,
   Address:string,
};

export const initialState: any = {
    userData:[]
};