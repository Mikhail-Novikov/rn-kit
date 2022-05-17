import { theme } from '../../constants/Colors';
import { SizeBtnSecondary } from '../../constants/SizeBtn';

export const StylesSecondary = (sm?: boolean, isDisabled?: boolean | undefined): object => ({
    btn: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: SizeBtnSecondary.BORDER_RAD,
        paddingHorizontal: sm ? SizeBtnSecondary.PADDING_H_SM : SizeBtnSecondary.PADDING_H_MD,
        paddingVertical: sm ? SizeBtnSecondary.PADDING_V_SM : SizeBtnSecondary.PADDING_V_MD,
        minWidth: sm ? SizeBtnSecondary.WIDTH_SM : SizeBtnSecondary.WIDTH_MD,
    },
    text: {
        color: isDisabled ? theme.asphalt_02 : theme.graphite_01,
        fontSize: sm ? SizeBtnSecondary.FONT_SIZE_SM : SizeBtnSecondary.FONT_SIZE_MD,
        fontWeight: sm ? SizeBtnSecondary.FONT_WEIGHT_SM : SizeBtnSecondary.FONT_WEIGHT_MD,
        lineHeight: 20,
        textAlign: 'center',
    },
});
