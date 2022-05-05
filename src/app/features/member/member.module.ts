import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { MemberRoutingModule } from './member-routing.module';

@NgModule({
  imports: [CommonModule, MemberRoutingModule],
  declarations: [MemberComponent],
})
export class MemberModule {}
