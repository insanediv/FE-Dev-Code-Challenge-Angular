import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatRoom, ChatRoomService } from './application';
import { LoggedUserRepository, LoggedUserRepositoryService, MessageRepository, MessageRepositoryService, PersonRepository, PersonRepositoryService } from './infrastructure';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ChatRoom,
      useClass: ChatRoomService 
    },
    {
      provide: PersonRepository,
      useClass: PersonRepositoryService 
    },
    {
      provide: MessageRepository,
      useClass: MessageRepositoryService 
    },
    {
      provide: LoggedUserRepository,
      useClass: LoggedUserRepositoryService 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
