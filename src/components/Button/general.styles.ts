import { theme } from '../../constants/Colors';
import { SizeBtnGeneral } from '../../constants/SizeBtn';

export const StylesGeneral = (sm?: boolean, isDisabled?: boolean | undefined): object => ({
    btn: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: isDisabled ? theme.asphalt_04 : theme.malachite_02,
        borderRadius: SizeBtnGeneral.BORDER_RAD,
        paddingHorizontal: sm ? SizeBtnGeneral.PADDING_H_SM : SizeBtnGeneral.PADDING_H_MD,
        paddingVertical: sm ? SizeBtnGeneral.PADDING_V_SM : SizeBtnGeneral.PADDING_V_MD,
        minWidth: sm ? SizeBtnGeneral.WIDTH_SM : SizeBtnGeneral.WIDTH_MD,
    },
    text: {
        color: isDisabled ? theme.asphalt_02 : theme.white,
        fontSize: sm ? SizeBtnGeneral.FONT_SIZE_SM : SizeBtnGeneral.FONT_SIZE_MD,
        fontWeight: sm ? SizeBtnGeneral.FONT_WEIGHT_SM : SizeBtnGeneral.FONT_WEIGHT_MD,
        lineHeight: 20,
        textAlign: 'center',
    },
});
