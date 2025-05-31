type FormatType = 'default' | '%' | 'USD';

export default class NumberFormatter {
	static format = (number = 0, format: FormatType = 'default', overrides?: Intl.NumberFormatOptions) => {
		let localeStringOptions: Intl.NumberFormatOptions | undefined;

		switch (format) {
			case '%':
				localeStringOptions = { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 };
				break;

			case 'USD':
				localeStringOptions = { style: 'currency', currency: 'USD' };
				break;
		}

		return number.toLocaleString(undefined, { ...localeStringOptions, ...overrides });
	};
}
