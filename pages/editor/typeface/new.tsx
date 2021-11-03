import { LayoutMain } from "components/Layout";
import {
    ProviderFontInput,
    ConsumerNewFont,
} from "libs/context/ContextNewFont";
import { InputFont, InputData } from "components/Input";

export default function Page() {
    return (
        <LayoutMain title="Editor Input">
            <ProviderFontInput>
                <ConsumerNewFont>
                    {({ typefaces }) =>
                        typefaces.length === 0 ? <InputFont /> : <InputData />
                    }
                </ConsumerNewFont>
            </ProviderFontInput>
        </LayoutMain>
    );
}
