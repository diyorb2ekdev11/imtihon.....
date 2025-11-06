export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  actions?: string;
}

export interface Student extends User {
  phoneNumber: string;
  groupCount: number;
}

export interface Group {
  _id: number;
  name: string;
  students: number[];
  started_group: string;
  end_group: string;
  actions: string;
}

export interface Course {
  name: string;
  price: number;
  duration: string;
  studentCount: number;
}

export interface Payment {
  student: string;
  group: string;
  client: string;
  month: string;
  method: string;
  date: string;
}
