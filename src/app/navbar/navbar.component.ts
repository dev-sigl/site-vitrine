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

    currentLanguage = defaultLanguage;
    defaultHidden : boolean = true;

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(defaultLanguage);
        this.translate.addLangs(additionalLanguages);

        let initLang = this.translate.getBrowserLang();
        if (languages.indexOf(initLang) === -1) {
            initLang = defaultLanguage;
        }
        this.currentLanguage = initLang;
        this.translate.use(initLang);
    }

    changeLanguage(lang) {
        this.defaultHidden = !this.defaultHidden;
        this.translate.use(lang);
    }

    ngOnInit() { 
        this.defaultHidden = this.currentLanguage == defaultLanguage;
    }
}