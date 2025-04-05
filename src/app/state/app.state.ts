import { companyState } from "./company.reducer";
import { ratioState } from "./ratios.reducer";
import { statementState } from "./statement.reducer";
import { userState } from "./user.reducer";

export interface AppState {
    company: companyState;
    statements: statementState;
    ratios: ratioState;
    user: userState;
}