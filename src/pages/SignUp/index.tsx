import { FormArea } from "../../components/FormArea";
import * as S from "./style";

export const SignUp = () => {
    return (
       <S.Container>
        <S.LeftContent>
            <S.SectionTitle>
                Lear to code by watching others
            </S.SectionTitle>
            <S.SectionText>
                Lorem ipsum dolor sit.
                Lorem ipsum dolor sit.
                Lorem ipsum dolor sit.
            </S.SectionText>
        </S.LeftContent>
        <S.RightContent>
            <FormArea/>
        </S.RightContent>
       </S.Container>
    )
}