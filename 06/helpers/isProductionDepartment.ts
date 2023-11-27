import IDepartment from "../interfaces/IDepartment";
import ProductionDepartment from "../classes/ProductionDepartment";

const isProductionDepartment = (
  department: IDepartment,
): department is ProductionDepartment => {
  return department instanceof ProductionDepartment;
};

export default isProductionDepartment;
