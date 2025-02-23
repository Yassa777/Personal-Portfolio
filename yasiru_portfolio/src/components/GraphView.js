import React, { useState, useCallback, useMemo } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

const GraphView = () => {
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [isDragging, setIsDragging] = useState(false);

  // Memoize graph data to prevent recreation on every render
  const graphData = useMemo(() => ({
    nodes: [
      { id: 'main', label: 'Main Blog', color: '#4CAF50', type: 'blog' },
      { id: 'tech', label: 'Technology', color: '#2196F3', type: 'blog' },
      { id: 'programming', label: 'Programming', color: '#9C27B0', type: 'blog' },
      { id: 'article1', label: 'React Basics', color: '#FF9800', type: 'project' },
      { id: 'article2', label: 'Web Development', color: '#FF9800', type: 'project' },
      { id: 'article3', label: 'AI Research', color: '#FF9800', type: 'project' },
      { id: 'personal', label: 'Personal', color: '#E91E63', type: 'blog' },
      { id: 'thoughts', label: 'Thoughts', color: '#FF9800', type: 'blog' },
    ],
    links: [
      { source: 'main', target: 'tech' },
      { source: 'tech', target: 'programming' },
      { source: 'programming', target: 'article1' },
      { source: 'programming', target: 'article2' },
      { source: 'tech', target: 'article3' },
      { source: 'main', target: 'personal' },
      { source: 'personal', target: 'thoughts' },
    ]
  }), []); // Empty dependency array since data is static

  const updateHighlight = useCallback((node) => {
    if (isDragging) return;
    
    const newHighlightNodes = new Set();
    if (node) {
      newHighlightNodes.add(node.id);
      graphData.links.forEach(link => {
        if (link.source.id === node.id || link.source === node.id) {
          newHighlightNodes.add(link.target.id || link.target);
        }
        if (link.target.id === node.id || link.target === node.id) {
          newHighlightNodes.add(link.source.id || link.source);
        }
      });
    }
    setHighlightNodes(newHighlightNodes);
  }, [isDragging, graphData.links]);

  const handleNodeDragStart = useCallback(() => {
    setIsDragging(true);
    setHighlightNodes(new Set());
  }, []);

  const handleNodeDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Memoize the node canvas object renderer
  const nodeCanvasObject = useCallback((node, ctx, globalScale) => {
    const isHighlighted = highlightNodes.has(node.id);
    const size = isHighlighted ? 9 : 6;
    
    ctx.globalAlpha = highlightNodes.size === 0 || isHighlighted ? 1 : 0.2;
    
    ctx.fillStyle = node.color;
    if (node.type === 'project') {
      ctx.fillRect(node.x - size, node.y - size, size * 2, size * 2);
    } else {
      ctx.beginPath();
      ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
      ctx.fill();
    }

    const fontSize = isHighlighted ? 12 : 10;
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.fillStyle = '#2D3748';
    ctx.textAlign = 'center';
    ctx.fillText(node.label, node.x, node.y + size + 6);
  }, [highlightNodes]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ForceGraph2D
        graphData={graphData}
        width={700}
        height={450}
        backgroundColor="#F8FAED"
        nodeRelSize={6}
        linkColor={() => 'rgba(155, 155, 155, 0.4)'}
        nodeCanvasObjectMode={() => 'after'}
        onNodeHover={updateHighlight}
        onNodeDragStart={handleNodeDragStart}
        onNodeDragEnd={handleNodeDragEnd}
        nodeCanvasObject={nodeCanvasObject}
        enableNodeDrag={true}
        enableZoom={false}
        enablePanInteraction={false}
      />
      
      {/* Legend */}
      <div className="flex justify-center items-center gap-8 mt-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <span>Blog Post</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-600"></div>
          <span>Project</span>
        </div>
      </div>
    </div>
  );
};

export default GraphView; 