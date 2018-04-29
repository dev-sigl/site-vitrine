import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

const defaultLanguage = "en";
const additionalLanguages = ["fr", "en"];
const languages: string[] =
    [defaultLanguage].concat(additionalLanguages);

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})


export class NavbarComponent implements OnInit {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(defaultLanguage);
        this.translate.addLangs(additionalLanguages);

        let initLang = this.translate.getBrowserLang();
        if (languages.indexOf(initLang) === -1) {
            initLang = defaultLanguage;
        }
        this.translate.use(initLang);
    }

    defaultHidden : boolean = true;

changeLanguage(lang){
    this.defaultHidden = lang == defaultLanguage;
    this.translate.use(lang);
}

ngOnInit() { }
}