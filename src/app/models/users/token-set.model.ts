import { Token } from "./token.model";

export interface TokenSet {
    access_token: Token;
    id_token: Token;
    refresh_token: Token;
    token_type: String;
    expires_in: Number;
}
