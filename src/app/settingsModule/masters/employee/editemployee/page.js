import { Suspense } from "react";
import { EmployeeEdit } from "./employeeEdit";

export default function EditEmployeePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmployeeEdit />
    </Suspense>
  );
}
