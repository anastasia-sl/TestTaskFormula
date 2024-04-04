import React, { useEffect, useState } from 'react';
import useStore from '../../store/formulaStore'; // Your Zustand store
import { fetchAutocompleteSuggestions } from '../../services/formulaService';
import Tag from "../Tag/Tag";

const FormulaInput: React.FC = () => {
    const { formula, addTag, removeTag, updateTagContent } = useStore();
    const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const suggestions = await fetchAutocompleteSuggestions();
                setAutocompleteSuggestions(suggestions.data); // Assuming the data property contains the suggestions
            } catch (error) {
                console.error('Error fetching autocomplete suggestions:', error);
            }
        };

        fetchData();
    }, []);

    const handleTagEdit = (tagId: string, content: string) => {
        updateTagContent(tagId, content);
    };

    return (
        <div className="formula-input">
            {formula.map((tag) => (
                <Tag
                    id={tag.id}
                    onEdit={handleTagEdit}
                    onDelete={() => removeTag(tag.id)}
                    content={'jgvj'}
                    autocompleteSuggestions={autocompleteSuggestions} // Make sure this prop is provided
                />
            ))}
            {/* Add new tag button */}
            <button onClick={addTag}>Add Tag</button>
        </div>
    );
};

export default FormulaInput;
