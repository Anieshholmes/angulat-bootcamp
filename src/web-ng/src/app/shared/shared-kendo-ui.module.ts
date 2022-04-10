import { NgModule } from "@angular/core";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { NotificationService } from "@progress/kendo-angular-notification";
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";

let importExportModules = [
    DropDownsModule,
    GridModule,
    ButtonsModule,
    LabelModule,
    InputsModule,
]

@NgModule({
    declarations: [],
    imports: importExportModules,
    exports: importExportModules,
    providers: [
        NotificationService
    ]
})

export class kendoUiModule { }