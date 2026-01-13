class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Dummy node to simplify result list creation
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    // Continue while there are nodes to process OR carry exists
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get values (0 if node doesn't exist)
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        // Add the two digits plus carry
        const sum = val1 + val2 + carry;
        
        // Extract digit and new carry
        const digit = sum % 10;  // Get ones place
        carry = Math.floor(sum / 10);  // Get tens place
        
        // Create new node with the digit
        current.next = new ListNode(digit);
        current = current.next;
        
        // Move to next nodes (if they exist)
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    // Return the result (skip dummy node)
    return dummy.next;
}


 
