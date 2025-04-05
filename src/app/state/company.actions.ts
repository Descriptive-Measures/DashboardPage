import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Company } from '../models/company.model';

export const CompanyActions = createActionGroup({
    source: 'Company',
    events: {
        'Retrieve Company': props<{company_id: string}>(),
        'Retrieve Company Success': props<{company: Readonly<Company>}>(),
        'Retrieve Company Failure': props<{error: string}>(),
        'Clear Company Data' : emptyProps(),
        'Skip Retrieve Company': emptyProps(),
    },
});