export function validateInput(data: any): boolean {
  return (
    data &&
    typeof data.jobDescription === "string" &&
    typeof data.currentResume === "string"
  );
}