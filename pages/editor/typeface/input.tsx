import { LayoutMain } from "components/Layout";
import {
    ConsumerFontInput,
    ProviderFontInput,
} from "libs/context/ContextFontInput";
import { InputFont, InputData } from "components/Input";

export default function Page() {
    return (
        <LayoutMain title="Editor Input">
            <ProviderFontInput>
                <ConsumerFontInput>
                    {({ typefaces }) =>
                        typefaces.length === 0 ? <InputFont /> : <InputData />
                    }
                </ConsumerFontInput>
            </ProviderFontInput>
        </LayoutMain>
    );
}
