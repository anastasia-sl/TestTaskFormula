// Tag.tsx
import React, { useState } from 'react';

interface TagProps {
    id: string;
    content: string;
    onEdit: (id: string, content: string) => void;
    onDelete: () => void;
    autocompleteSuggestions: any[]; // Add this line
}


const Tag: React.FC<TagProps> = ({ id, content, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(content);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(id, editedContent);
        setIsEditing(false);
    };

    return (
        <div className="tag">
            {isEditing ? (
                <input
                    type="text"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                />
            ) : (
                <span>{content}</span>
            )}
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Tag;
