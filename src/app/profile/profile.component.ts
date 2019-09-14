import { Component, OnInit } from "@angular/core";
import { LoggedComponent } from "../shared/components/logged.component";
import { StorageService } from "../shared/services/storage.service";
import { MembersService } from "../shared/services/members.service";
import { Member } from "../shared/business/member.model";

@Component({
    selector: "Profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent extends LoggedComponent implements OnInit {

    public member: Member|null = null;
    public loading: boolean = false;

    constructor(
        protected _storageService: StorageService,
        private _memberService: MembersService,
    ) {
        super(
            _storageService
        );
    }

    ngOnInit(): void {
        if (this.loggedUser)
            this._fetchMember();
    }

    public signOut()
    {
        console.log('tap sign out');

        if (this.loggedUser)
            this._storageService.removeUser().then(success => {
                this._storageService.user = null;
                console.log('signout');
                this.member = null;
            }, (err) => {
                console.log(err);
            });
        else
            console.log('no logged user');
    }

    private _fetchMember() {

        console.log('fetch member by id');

        this.loading = true;

        this._memberService.getItem(
            this.loggedUser.id
        )
        .subscribe((member:Member) => {
            this.member = member;
            console.log(this.member);
            this.loading = false;
        }, (error) => {
            console.log(error);
        });
    }
}
