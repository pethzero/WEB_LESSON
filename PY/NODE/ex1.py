class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    # Insert a node into the binary tree
    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self._insert(self.root, value)

    def _insert(self, current, value):
        if value < current.value:
            if current.left is None:
                current.left = Node(value)
            else:
                self._insert(current.left, value)
        else:
            if current.right is None:
                current.right = Node(value)
            else:
                self._insert(current.right, value)

    # Inorder Traversal (Left, Root, Right)
    def inorder_traversal(self, node, values):
        if node:
            self.inorder_traversal(node.left, values)
            values.append(node.value)
            self.inorder_traversal(node.right, values)

    # Get all values in sorted order
    def get_sorted_values(self):
        values = []
        self.inorder_traversal(self.root, values)
        return values

# Usage Example
tree = BinaryTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(2)
tree.insert(7)

print("Inorder Traversal:", tree.get_sorted_values())
