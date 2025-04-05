import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IncomeStatement } from '../models/statements/income_statement.model';
import { BalanceSheet } from '../models/statements/balance_sheet.model';
import { Ratios } from '../models/ratios.model';
import { CashFlowStatement } from '../models/statements/cash_flow_statement.model';
import { Assumptions } from '../models/assumptions.model';
import { Forecast } from '../models/forecast.model';
import { Company } from '../models/company.model';

import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class DescriptiveMeasuresDashboardService {
  private apiURL = `${environment.apiProtocol}://${environment.apiHost}:${environment.apiPort}`
  constructor(private http: HttpClient) {}

  getCompany(company_id: string): Observable<Company> {
    return this.http
      .get<Company>(
        `${this.apiURL}/company/${company_id}`
      )
      .pipe(tap( result => console.log('Respons: ', result)), map((company) => company));
  }

  getIncomeStatement(company_id: string, year: number): Observable<IncomeStatement> {
    return this.http
      .get<IncomeStatement>(
        `${this.apiURL}/company/${company_id}/statement/income_statement/${year}`
      )
      .pipe(tap( result => console.log('Respons: ', result)), map((income_statement) => income_statement));
  }

  getBalanceSheet(company_id: string, year: number): Observable<BalanceSheet> {
    return this.http
      .get<BalanceSheet>(
        `${this.apiURL}/company/${company_id}/statement/balance_sheet/${year}`
      )
      .pipe(map((balance_sheet) => balance_sheet));
  }

  getCashFlowStatement(company_id: string, beginning_balance_sheet: BalanceSheet, ending_balance_sheet: BalanceSheet, income_statement: IncomeStatement): Observable<CashFlowStatement> {
    const formData = new FormData()
    formData.append('beginning_balance_sheet', JSON.stringify(beginning_balance_sheet));
    formData.append('ending_balance_sheet', JSON.stringify(ending_balance_sheet));
    formData.append('income_statement', JSON.stringify(income_statement));

    return this.http
      .post<CashFlowStatement>(
        `${this.apiURL}/company/${company_id}/statement/cash_flow_statement/`,
        formData
      )
      .pipe(map((cash_flow_statement) => cash_flow_statement));
  }

  getRatios(params: {endingBalanceSheet: BalanceSheet | null, incomeStatement: IncomeStatement | null}): Observable<Ratios>{
    const {endingBalanceSheet, incomeStatement} = params;
    const formData = new FormData()
    formData.append('ending_balance_sheet', JSON.stringify(endingBalanceSheet))
    formData.append('income_statement', JSON.stringify(incomeStatement))

    return this.http
      .post<Ratios>(
        `${this.apiURL}/ratios/`,
        { 
          balance_sheet: endingBalanceSheet,
          income_statement: incomeStatement
        }
    )
  }

  runForecast(params: {endingBalanceSheet: BalanceSheet | null, incomeStatement: IncomeStatement | null, ratios: Ratios | null, assumptions: Assumptions | null}): Observable<Forecast>{
    const {endingBalanceSheet, incomeStatement, ratios, assumptions} = params;
 
    return this.http
      .post<Forecast>(
        `${this.apiURL}/forecast/`,
        { 
          balance_sheet: endingBalanceSheet,
          income_statement: incomeStatement,
          ratios: ratios,
          assumptions: assumptions,
        }
    )
  }
}