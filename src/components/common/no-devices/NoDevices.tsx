import Monitor from "@/assets/jamboard.svg?react";

const NoDevice = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Monitor className="w-8 h-8 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold">No devices found</h3>
      <p className="text-muted-foreground text-sm">
        Try adjusting your search or filter criteria
      </p>
    </div>
  );
};

export default NoDevice;
