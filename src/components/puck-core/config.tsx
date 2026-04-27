import { Config } from "@puckeditor/core";
import Text, { Textfields, TextProps } from "./components/text";
import Columns, { ColumnsFields, ColumnsProp } from "./components/columns";
import QNA from "./components/q-n-a";

type Props = {
    Text: TextProps
    Columns: ColumnsProp;
    QNA: object;
};

export const config: Config<Props> = {
    categories: {
        basic: {
            components: ["Text"],
        },
        layout: {
            components: ["Columns"]
        },
        custom: {
            components: ["QNA"]
        }
    },
    components: {
        Text: {
            fields: Textfields,
            render: (props) => <Text {...props} />,
        },
        Columns: {
            fields: ColumnsFields,
            render: (props) => <Columns {...props} />,
        },
        QNA: {
            fields: {},
            render: () => <QNA/>
        }
    }
}