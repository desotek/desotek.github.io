import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
interface SampleReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const SampleReportDialog = ({
  open,
  onOpenChange
}: SampleReportDialogProps) => {
  const [email, setEmail] = useState('');
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast({
        title: "Thank you for requesting a sample report!",
        description: "You should get a copy at the email address you entered shortly."
      });
      setEmail('');
      onOpenChange(false);
    }
  };
  const isEmailValid = email.trim().length > 0 && email.includes('@');
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Request a Sample Report</DialogTitle>
          <DialogDescription>
            Enter your email address to receive a sample report showing how we identify and eliminate tech spend waste.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="your.email@company.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isEmailValid} className="btn-orange">
              Submit Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
};
export default SampleReportDialog;