import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberService {
  constructor(private http: HttpClient) {}

  getMembers() {
    const apiUrl =
      'https://script.google.com/macros/s/AKfycbxmAFfURqZHjLlCicjDvxQYX4L9Vvzmu_RnDkw6LhKO1yD7W166PQYHjksBODxXsby_/exec?action=selects&sheet_name=member';
    return this.http.get<any[]>(apiUrl);
  }

  getMemberById(userId) {
    const apiUrl =
      'https://script.google.com/macros/s/AKfycbxmAFfURqZHjLlCicjDvxQYX4L9Vvzmu_RnDkw6LhKO1yD7W166PQYHjksBODxXsby_/exec?action=select&sheet_name=member&line_id=' +
      userId;
    return this.http.get<any>(apiUrl);
  }
}
