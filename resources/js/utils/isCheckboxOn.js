export const isCheckboxOn = (filters, name, value) => {
  if (!filters) {
		return false;   // filtersが未定義だったら false をreturn
  } else if (!filters[name]) {
		return false;   // filtersのnameプロパティが未定義だったら false をreturn
  } else {
		return filters[name].includes(value);
  }
}