import { useState } from "react";
import * as S from "./style";
import { UserData } from "../../@types/user";


export const FormArea = () => {
    const [formData, setFormData] = useState<UserData>({} as UserData);
    return (
        <>
            <S.Button backgroundColor="--accent-blue"
            width="100%">Try it free days then $20/mo. 
                thereafter
            </S.Button>
            <S.FormArea>
                <S.Fields>
                    <S.Input placeholder="First Name"
                    value={formData.firstName}
                    onChange={e => 
                    setFormData(prev => 
                    ({ ...prev, firstName: e.target.value }))}/>
                    
                    <S.Input placeholder="Last Name"
                    onChange={e => 
                    setFormData(prev => 
                    ({ ...prev, lastName: e.target.value }))}/>

                    <S.Input placeholder="Email Adress"
                    onChange={e => 
                    setFormData(prev => 
                    ({ ...prev, email: e.target.value }))}/>

                    <S.Input placeholder="Password"
                    onChange={e => 
                    setFormData(prev => 
                    ({ ...prev, password: e.target.value }))}/>
                    
                </S.Fields>
                <S.Button 
                backgroundColor="--primary-green" 
                width="100%">Claim your free trial</S.Button>
                <S.TermsContainer>
                    <S.SmallText>By clicking the button 
                        you are agrooing to our 
                    </S.SmallText>
                    <S.Link>Terms and Services</S.Link>
                </S.TermsContainer>
            </S.FormArea>
        </>
    )
}