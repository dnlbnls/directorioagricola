function createNavbarVariant() {
	let variant = $state('default');
  const update = (data) => {
    variant = data;
  }
  const reset = () => {
    variant = 'default';
  }
	return {
    get variant() {
			return variant;
		},
    update,
    reset

	};
}
export const navbarVariant = createNavbarVariant();



function createCompanies() {
	let companies = $state([]);
  const update = (data) => {
    companies = data;
  }
  const reset = () => {
    items = [];
  }
	return {
    get companies() {
			return companies;
		},
    update,
    reset
	};
}
export const companies = createCompanies();



function createFilters() {
	let category = $state();
	let state = $state();
	return {
    get category() {
			return category;
		},
    get state(){
      return state;
    },
    set category(value) { category = value },
    set state(value) { state = value }
	};
}
export const filters = createFilters();